import React from 'react'

const App = props => (
  <div>
    <div style={styles.imgContainer}>
      <img style={styles.headerImg} src="/desert-island.jpg" alt="desert island" />
    </div>
    <h1 style={{ textAlign: 'center', fontFamily: 'Anton, sans-serif' }}>Welcome the to the Big Desert Island project!</h1>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos placeat consectetur accusamus ullam recusandae vel dolor dolore harum. Ratione excepturi exercitationem perspiciatis? Culpa recusandae ducimus deleniti magni placeat? In, nemo.</p>
  </div>
)

export default App

const styles = {
  imgContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 400,
    justifyContent: 'flex-end',
    overflow: 'hidden'
  },
  headerImg: {
    height: 'auto',
    width: '100%'
  }
}
