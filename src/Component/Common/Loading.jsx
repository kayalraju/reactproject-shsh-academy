import React from 'react'
import { Rings } from 'react-loader-spinner'

const Loading = () => {
  return (
    <>
      <Rings
        height="80"
        width="80"
        color="#4fa94d"
        radius="7"
        wrapperStyle={{textAlign: 'center'}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </>
  )
}

export default Loading
