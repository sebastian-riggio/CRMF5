import MenuMobileItem from '../MenuMobileItem';
import SearchInput from './search';

function MobileMenuNav() {
    return (
        <div className='h-screen w-screen flex flex-col container mx-auto '>
            <div className='m-20 flex-grow'>
                <MenuMobileItem 
                    title="PROYECTOS"
                    links={[
                        { url: '/allprojects', text: 'PROYECTOS' },
                        { url: '/newproject', text: 'SUBIR NUEVO PROYECTO' },
                    ]}
                />

                <MenuMobileItem
                    title="CONVOCATORIAS"
                    links={[
                        { url: '/allcalls', text: 'CONVOCATORIAS' },
                        { url: '/newcall', text: 'SUBIR NUEVA CONVOCATORIA' },
                    ]}
                />

                <MenuMobileItem
                    title="FINANCISTAS"
                    links={[
                        { url: '/allfinanciers', text: 'FINANCISTAS' },
                        { url: '/newfinancier', text: 'SUBIR NUEVO FINANCISTA' },
                    ]}
                />
                <div className='container mx-auto mt-12'>
                    <SearchInput />
                </div>
            </div>
        </div>
    );
}

export default MobileMenuNav;
