export const Search = props => (
  <svg
    className={props.className}
    fill='#000000'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='24px'
    height='24px'
  >
    {' '}
    <path d='M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z' />
  </svg>
)

export const FilterIcon = props => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'>
    <path
      className={props.active ? props.className : ''}
      opacity='0.5'
      d='M16 12.85v1.65L12.75 18 9.5 14.5v-1.65H16z'
      fill='#848E9C'
    ></path>
    <path
      className={!props.active ? props.className : ''}
      opacity='0.5'
      d='M9.5 9.745v-1.65l3.25-3.5 3.25 3.5v1.65H9.5z'
      fill='#848E9C'
    ></path>
  </svg>
)
