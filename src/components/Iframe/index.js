import React, { useState } from "react"
import styles from "./styles.module.css"

/**
 * @typedef {import('react').HTMLAttributes<HTMLIFrameElement> & {
*   src: string, // URL ของ iframe (จำเป็น)
*   title?: string, // ชื่อของ iframe เพื่อช่วยในด้านการเข้าถึง
*   allowFullScreen?: boolean, // ระบุว่า iframe อนุญาตให้แสดงแบบเต็มหน้าจอหรือไม่
*   sandbox?: string, // ข้อจำกัดความปลอดภัยของ iframe
* }} IframeProps
* 
* @param {IframeProps} props - Props ที่จะส่งให้ iframe component
* @returns {React.Element} - Component ของ iframe
* 
* ตัวอย่างการใช้งาน:
* ```jsx
* <Iframe
*   src="https://example.com"
*   title="Example Iframe"
*   width="800px"
*   height="600px"
*   allowFullScreen
*   sandbox="allow-scripts allow-same-origin"
*   style={{ borderRadius: '8px', border: '1px solid #ccc' }}
* />
* ```
*/
const Iframe = (props) => {

  return (
    <div className={styles.iframeContainer}>
      <iframe
        {...props}
      ></iframe>
    </div>
  )
}

export default Iframe
