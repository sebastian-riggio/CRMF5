import { Link } from 'react-router-dom'; 

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../accordion';

function MobileMenuNav() {
    return (
        <div className='h-screen w-screen flex flex-col'>

            <div className='m-20 flex-grow'>

                <div className='mx-5'>
                    <Accordion type='single' collapsible>
                        <AccordionItem value='item-1'>
                            <AccordionTrigger>PROYECTOS</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li className='py-4'>
                                        <Link to='/allprojects'>PROYECTOS</Link>
                                    </li>
                                    <li className='py-4'>
                                        <Link to='/newproject'>SUBIR NUEVO PROYECTO</Link>
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className='mx-5'>
                    <Accordion type='single' collapsible>
                        <AccordionItem value='item-1'>
                            <AccordionTrigger>CONVOCATORIAS</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li className='py-4'>
                                        <Link to='/allcalls'>CONVOCATORIAS</Link>
                                    </li>
                                    <li className='py-4'>
                                        <Link to='/newcall'>SUBIR NUEVA CONVOCATORIA</Link>
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className='mx-5'>
                    <Accordion type='single' collapsible>
                        <AccordionItem value='item-1'>
                            <AccordionTrigger>FINANCISTAS</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li className='py-4'>
                                        <Link to='/allfinanciers'>FINANCISTAS</Link>
                                    </li>
                                    <li className='py-4'>
                                        <Link to='/newfinancier'>SUBIR NUEVO FINANCISTA</Link>
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className='mx-5'>
                    <Accordion type='single' collapsible>
                        <AccordionItem value='item-1'>
                            <AccordionTrigger>USUARIOS</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li className='py-4'>
                                        <Link to='/allprojects'>USUARIOS</Link>
                                    </li>
                                    <li className='py-4'>
                                        <Link to='/newproject'>CREAR NUEVO USUARIO</Link>
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

            </div>
        </div>
    );
}

export default MobileMenuNav;
