import React from 'react'
import { ApplicationInsights } from '@microsoft/applicationinsights-web'
import {
  ReactPlugin,
  withAITracking
} from '@microsoft/applicationinsights-react-js'
import { createBrowserHistory } from 'history'

const browserHistory = createBrowserHistory({ basename: '' })
var reactPlugin = new ReactPlugin()
var appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: '16d23ada-0548-4048-ab90-537e190279ef',
    extensions: [reactPlugin],
    extensionConfig: {
      [reactPlugin.identifier]: { history: browserHistory }
    }
  }
})
appInsights.loadAppInsights()

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome the to the Big Desert Island project!</h1>
      </div>
    )
  }
}

export default withAITracking(reactPlugin, appInsights, App)
