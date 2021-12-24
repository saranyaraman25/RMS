import {ApolloClient, HttpLink, split, InMemoryCache} from '@apollo/client'
import {getMainDefinition} from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/link-ws'

export default function createClient() {

  const GRAPHQL_ENDPOINT = '[YOUR HASURA GRAPHQL ENDPOINT]'

  const httpLink = new HttpLink({uri: `https://${GRAPHQL_ENDPOINT}`})

  const wsLink = new WebSocketLink({
    uri: `ws://${GRAPHQL_ENDPOINT}`,
    options: {
      reconnect: true,
    },
  })

  const splitLink = split(({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
  )

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: splitLink,
  })

  return client
}