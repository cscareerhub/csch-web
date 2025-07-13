import React, { ReactElement } from 'react';
import styles from "./Testimonials.module.scss"
import Testimonial from "./Testimonial/Testimonial";

const Testimonials = (): ReactElement => {
    return (
        <div className={styles.testimonialSection}>
            <p className={styles.testimonialHeading}>Testimonals</p>
            <div className={styles.testimonialContainer}>
                <Testimonial
                    text="I feel like my friends can mostly keep up when I talk tech with them, they just don't have much ambition as far career goes. One of the things groups like CSCH do is they normalize hyper ambition in a way which is pretty nonstandard."
                    occupation="Senior Software Engineer at Netflix"
                />
                <Testimonial
                    text="CSCH connected me with dozens of senior engineers when I was just an intern. I was surprised to find that this was a kind of access a lot of peers around me did not have. As a result, from very early in my career, I had a unique and deeper insight into the industry. This helped from interviews to negotiations to navigating my first full-time job."
                    occupation="Software Engineer at Adobe"
                />
                <Testimonial
                    text="I did 10 or so mocks through CSCH before getting an offer at Google a month later. They were all extremely helpful. I also had a public one from Kevin (the founder of CSCH) which lit my butt on fire."
                    occupation="Software Engineer at Google"
                />
            </div>
        </div>
    );
}

export default Testimonials;
