import React, { ReactElement } from 'react';
import classnames from 'classnames';
import styles from './Testimonial.module.scss';

interface TestimonialProps {
    text: string;
    occupation: string;
}

const Testimonial = (props: TestimonialProps): ReactElement => {
    const {text, occupation } = props;
    return (
        <div className={styles.testimonial}>
            <p className={styles.quotes}>&ldquo;</p>
            <p className={styles.text}>{text}</p>
            <p className={classnames(styles.quote, styles.quotes)}>&rdquo;</p>
            <div>
                <p className={styles.occupation}>{occupation}</p>
            </div>
        </div>
    );
};

export default Testimonial;
