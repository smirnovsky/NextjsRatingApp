import { FooterProps } from "./Footer.props";
import styles from './P.module.css';
import cn from 'classnames'


export const Footer = ({ ...props }: FooterProps): JSX.Element => {
    return (
        <div {...props}>
            Footer
        </div>
     
    );
    
} ; 