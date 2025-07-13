import React, { ReactElement } from 'react';
import styles from './Testimonial.module.scss';
import classnames from 'classnames';

interface TestimonialProps {
    className: string;
    text: string;
    occupation: string;
}

const Testimonial = (props: TestimonialProps): ReactElement => {
    const { className, text, occupation } = props;
    return (
        <div className={styles.testimonial}>
            <p className={classnames(styles.quoteOne, styles.quotes)}>&ldquo;</p>
            <p className={styles.text}>{text}</p>
            <p className={classnames(styles.quote, styles.quotes)}>&rdquo;</p>
            <div>
                <p className={styles.occupation}>{occupation}</p>
            </div>
        </div>
    );
};

export default Testimonial;
