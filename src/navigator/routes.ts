import { Route } from '../interfaces/Route'
import { Home } from '../pages/Home'
import { ComingSoon } from '../pages/ComingSoon'

const routes:Route[] = [
  { path: '/home', component: Home, name: 'Home', icon: 'home', prefix: 'fas' },
  { path: '/explore', component: ComingSoon, name: 'Explore', icon: 'hashtag', prefix: 'fas' },
  { path: '/notifications', component: ComingSoon, name: 'Notifications', icon: 'bell', prefix: 'far' },
  { path: '/messages', component: ComingSoon, name: 'Messages', icon: 'envelope', prefix: 'far' },
  { path: '/bookmarks', component: ComingSoon, name: 'Bookmarks', icon: 'bookmark', prefix: 'far' },
  { path: '/lists', component: ComingSoon, name: 'Lists', icon: 'list', prefix: 'fas' },
  { path: '/profile', component: ComingSoon, name: 'Profile', icon: 'user', prefix: 'far' },
  { path: '/more', component: ComingSoon, name: 'More', icon: 'ellipsis', prefix: 'fas' }
]

export default routes
