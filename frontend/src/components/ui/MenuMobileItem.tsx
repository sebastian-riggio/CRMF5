import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from './accordion';
import { Link } from 'react-router-dom';

interface AdminMenuItemProps {
    title: string;
    links: Array<{ url: string; text: string }>;
}

function MenuMobileItem({ title, links }: AdminMenuItemProps) {
    return (
        <div className='mx-5'>
            <Accordion type='single' collapsible>
                <AccordionItem value={title}>
                    <AccordionTrigger>{title}</AccordionTrigger>
                    <AccordionContent>
                        <ul>
                            {links.map((link, index) => (
                                <li key={index} className='py-4'>
                                    <Link to={link.url}>{link.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default MenuMobileItem;
