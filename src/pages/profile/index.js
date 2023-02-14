import React from "react";
import styles from "./styles.module.css"
function Profile() {
    return(
        <div className={styles.container}> 
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div className={styles.avatar}> </div>
                </div>
                <div  className={styles.name}>
                    <div> Đinh Huy Hoàng</div>
                </div>
                <div className={styles.content}>
                    <div className={styles.infor}>Ngày sinh: 25/03/2002</div>
                    <div className={styles.infor}>Que quán: Nam Định </div>
                    <div className={styles.infor}>Đã từng học tại: Học viện Công nghệ Bưu Chính Viễn Thông</div>
                    <div className={styles.infor}> Kĩ thuật điện tử viễn thông</div>
                </div>
                <div className={styles.link}>

                    <button className={styles.button}> Facebook</button>
                    <button className={styles.button}>Zalo </button>
                    <button className={styles.button}> Gmail</button>
                </div>
                
            </div> 
        </div> 
    )
}
export default Profile;