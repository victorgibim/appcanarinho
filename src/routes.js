import { creatAppContainer, creatStackNavigation } from 'react-navigation';

import Main from './pages/Main';
import Audio from './pages/Audios';

const Routes = creatAppContainer(
  creatStackNavigation({
    Main,
    Audio
  }, {
    defaultNavigationOpitions: {
      header: null,
    }
  })
)

export default Routes;