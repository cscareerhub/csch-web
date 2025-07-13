import React, { ReactElement } from 'react';
import classnames from 'classnames';
import styles from './Testimonial.module.scss';

interface TestimonialProps {
    text: string;
    occupation: string;
    backgroundColor?: 'dark' | 'light';
}

const Testimonial = ({ text, occupation, backgroundColor }: TestimonialProps): ReactElement => (
    <div className={classnames(styles.testimonial, styles[backgroundColor])}>
        <p className={styles.quotes}>&ldquo;</p>
        <p>{text}</p>
        <p className={classnames(styles.quotes, styles.endquote)}>&rdquo;</p>
        <div>
            <p className={styles.occupation}>{occupation}</p>
        </div>
    </div>
);

export default Testimonial;

Testimonial.defaultProps = {
    backgroundColor: 'dark'
};
