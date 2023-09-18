import MenuMobileItem from '../MenuMobileItem';

function AdminMobileMenuNav() {
    return (
        <div className='h-screen w-screen flex flex-col'>
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
                <MenuMobileItem
                    title="USUARIOS"
                    links={[
                        { url: '/allusers', text: 'USUARIOS' },
                        { url: '/registeruser', text: 'CREAR NUEVO USUARIO' },
                    ]}
                />

            </div>
        </div>
    );
}

export default AdminMobileMenuNav;
