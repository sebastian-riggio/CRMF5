import MenuItem from '../MenuItem'

function DesktopMenuNav() {
  return (
    <>
      <div className='flex space-x-4'>
        <div>
          <MenuItem
            title="PROYECTOS"
            links={[
              { url: '/allprojects', text: 'PROYECTOS' },
              { url: '/newproject', text: 'SUBIR NUEVO PROYECTO' },
            ]}
          />
        </div>

        <div>
          <MenuItem
            title="CONVOCATORIAS"
            links={[
              { url: '/allcalls', text: 'CONVOCATORIAS' },
              { url: '/newcall', text: 'SUBIR NUEVA CONVOCATORIA' },
            ]}
          />
        </div>

        <div>
          <MenuItem
            title="FINANCISTAS"
            links={[
              { url: '/allfinanciers', text: 'FINANCISTAS' },
              { url: '/newfinancer', text: 'SUBIR NUEVO FINANCISTA' },
            ]}
          />
        </div>
      </div>
    </>
  )
}
export default DesktopMenuNav
