import { Redirect, Route, Switch } from 'wouter'
import routes from './routes'

export const Navigator = () => {
  return (
    <div className="flex flex-1 lg:max-w-2xl">
      <Switch>
        {routes.map(({ path, component }, key) => <Route key={key} path={path} component={component}/>)}
      </Switch>
      <Redirect to="/home"/>
    </div>
  )
}
