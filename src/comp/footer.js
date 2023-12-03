import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
 

  return (
    <>
    <footer>
        <div class="footer-content">
        <p>Made by</p>
            <a href='https://jeremiah-coder.web.app/'><img src='https://coolchatappjl.web.app/static/media/better_logo.8da24179d191f15a7f66.jpg'/></a>
            
            
        </div>
        <div class="footer-bottom">
            <p>Copyright © 2023, All Right Reserved &copy; <a href="https://jeremiah-coder.web.app/">Jeremiah</a>  </p>
                    <div class="footer-menu">
                      <ul class="f-menu">
                        <li><a href="https://impressum-ec92d.web.app/">Impressum</a></li>
                        
                      </ul>
                    </div>
        </div>

    </footer>
    </>
  )
}

export default Footer