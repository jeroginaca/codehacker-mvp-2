import React from 'react'

const VideoBackground = () => {
  return (
    <>
        <video className="md:hidden"
            autoPlay
            loop
            muted
            playsInline
            style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            }}
        >
            <source src="https://res.cloudinary.com/dr3cvyonp/video/upload/v1688056505/CodeHacker/Mascara-Video-movil_jr0aie.mp4" type="video/mp4" />
        </video>

        <video className="hidden md:block lg:hidden"
            autoPlay
            loop
            muted
            style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            }}
        >
            <source src="https://res.cloudinary.com/dr3cvyonp/video/upload/v1688057535/CodeHacker/Mascara-Video-ipad_rjkiok.mp4" type="video/mp4" />
        </video>

        <video className="hidden lg:block"
            autoPlay
            loop
            muted
            style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            }}
        >
            <source src="https://res.cloudinary.com/dr3cvyonp/video/upload/v1688051534/CodeHacker/Mascara-Video-2_yirsa5.mp4" type="video/mp4" />
        </video>

    </>
  )
}

export default VideoBackground