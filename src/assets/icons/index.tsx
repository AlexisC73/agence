import { SVGProps } from 'react'

export function Burger(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 16 16' {...props}>
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      >
        <path d='M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5'></path>
      </g>
    </svg>
  )
}

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 24 24' {...props}>
      <path
        d='M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z'
        fill='currentColor'
      ></path>
    </svg>
  )
}

export function MapMarker(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 256 256' {...props}>
      <path
        fill='currentColor'
        d='M128.1 16a88.1 88.1 0 0 0-88 88c0 75.3 80 132.2 83.4 134.6a8.3 8.3 0 0 0 9.2 0c3.4-2.4 83.4-59.3 83.4-134.6a88.1 88.1 0 0 0-88-88Zm0 56a32 32 0 1 1-32 32a32 32 0 0 1 32-32Z'
      ></path>
    </svg>
  )
}
