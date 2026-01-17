import Link from 'next/link'
import React from 'react'
import config from '../../config'

const Logo = () => {
  const {appName}= config;
  const appNameParts = appName.split(" ");
  return ( <Link href="#">
  <div className="companyLogo  flex justify-end justify-center pl-16">
            <div>
          <span className="text-3xl font-bold text-primary">{appNameParts[0]} </span>
            <span className="text-2xl font-semibold text-secondary">{appNameParts[1]}</span>
            </div>
            
        </div></Link>
    
  )
}

export default Logo
