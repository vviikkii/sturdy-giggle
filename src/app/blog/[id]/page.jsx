import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import {notFound} from "next/navigation"


async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
   return notFound()
  }
 
  return res.json()
}


const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}
          <br />
          <br />
          </h1>
          <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus ipsum leo, at ornare neque placerat quis. Pellentesque ut arcu maximus, imperdiet elit vitae, sodales nisi. Suspendisse convallis quis elit non feugiat. Aliquam placerat vehicula maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
          </p>
          <br />
          <br />
          <div className={styles.author}>
            <Image 
            src="https://images.pexels.com/photos/1250643/pexels-photo-1250643.jpeg"
            alt=""
            width={40}
            height={40}
            className={styles.avatar}
            />
            <span className={styles.username}> Krista Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image 
          src="https://images.pexels.com/photos/3013440/pexels-photo-3013440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill={true}
          className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>Nulla nunc risus, rhoncus et ex at, efficitur elementum nisl. Curabitur rhoncus metus a consequat hendrerit. Proin bibendum tempor leo, sit amet vulputate odio elementum eget. Fusce vestibulum tellus vitae maximus tristique. Cras fermentum in ligula nec facilisis. Morbi scelerisque quis tellus quis aliquam. <br /> <br />
        brCurabitur mauris arcu, ultricies quis viverra et, lacinia vel eros. Maecenas malesuada finibus sapien, vel suscipit tortor facilisis eu. pellentesque finibus fringilla. Nulla efficitur vehicula enim, at egestas risus congue eget. Nullam porttitor maximus libero, nec vestibulum nunc mollis a. Pellentesque dictum massa in mattis varius.  <br /> <br />Cras efficitur, erat eget aliquet vestibulum, orci turpis faucibus nunc, et egestas sem ex vel est.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum imperdiet massa a diam vestibulum imperdiet. Sed sagittis dictum ante. Aliquam quis finibus dolor. Morbi at massa tincidunt, vestibulum enim ut, dignissim tortor. Praesent vel odio vel turpis pellentesque laoreet nec in nisi. In luctus finibus ipsum vitae feugiat.

Curabitur eu metus augue. Praesent interdum finibus rutrum. Duis vel enim maximus nisl eleifend sollicitudin eget ut justo. Pellentesque eget viverra elit. Phasellus in lectus efficitur, ornare purus rhoncus, placerat mauris. Vestibulum nisl lorem, condimentum a pretium quis, aliquet facilisis nisl. Pellentesque ipsum turpis, lacinia vitae libero ut, tincidunt rutrum libero. Nulla varius posuere elit ut semper. <br /> <br /></p>
      </div>
    </div>
  )
}

export default BlogPost
