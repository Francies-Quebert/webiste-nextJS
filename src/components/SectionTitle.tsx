import React from 'react'

const SectionTitle = ({ title }: { title: string | JSX.Element }) => {
    return (
        <h3 className=" pb-6 font-playfair text-2xl font-semibold">{title}</h3>
    )
}

export default SectionTitle