import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types'

export interface Route {
  path: string
  name: string
  component: () => JSX.Element
  prefix: IconPrefix
  icon: IconName
}
