import React from 'react'
import { pageLinks } from '../data'

export default function PageLinks({parentClass, itemClass}) {
  return (
    <ul className={parentClass}>
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={itemClass}>
              {link.text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}