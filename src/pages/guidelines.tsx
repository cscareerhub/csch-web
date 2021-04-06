import { ReactElement } from "react";
import HeadComponent from '@components/Head';
import Layout from '@components/Layout';
import styles from './guidelines.module.scss'

const Guidelines = (): ReactElement => {
    return (
        <>
            <HeadComponent title="Rules & guidelines" />
            <Layout>
                <div className={styles.guidelinesContainer}>
                    <h1>Rules & guidelines</h1>
                    <h2> Lorem ipsum </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non augue quam. 
                        Cras eleifend, nisi id commodo cursus, purus libero porttitor tellus, vitae malesuada libero orci sit amet justo. 
                        Nulla ut scelerisque sapien, in vulputate augue. Sed facilisis felis a quam semper varius. 
                        Maecenas eget congue lorem, sed pellentesque nunc. Donec laoreet iaculis nulla ut porttitor. 
                        Morbi sit amet pretium dui. Vestibulum et viverra est.
                    </p>

                    <h2> Lorem ipsum </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non augue quam. 
                        Cras eleifend, nisi id commodo cursus, purus libero porttitor tellus, vitae malesuada libero orci sit amet justo. 
                        Nulla ut scelerisque sapien, in vulputate augue. Sed facilisis felis a quam semper varius. 
                        Maecenas eget congue lorem, sed pellentesque nunc. Donec laoreet iaculis nulla ut porttitor. 
                        Morbi sit amet pretium dui. Vestibulum et viverra est.
                    </p>
                </div>
            </Layout>
        </>
    );
}

export default Guidelines;