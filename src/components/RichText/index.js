import { PortableText } from "@portabletext/react";
import { getImageDimensions } from '@sanity/asset-utils'
import urlBuilder from '@sanity/image-url'
import React from "react";

const SampleImageComponent = ({value, isInline}) => {
  const {width, height} = getImageDimensions(value)
  return (
    <img
      src={urlBuilder()
        .dataset(process.env.GATSBY_SANITY_DATASET)
        .projectId(process.env.GATSBY_SANITY_PROJECT_ID)
        .image(value)
        .width(isInline ? 100 : 800)
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  )
}

const myPortableTextComponents = {
  types: {
    image: SampleImageComponent,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      )
    },
    strong: ({ children }) => <strong className='font-semibold'>{children}</strong>,
  },
  block: {
    style: 'normal',
    h1: ({ children }) => <h1 className='text-3xl sm:text-5xl font-semibold text-textPrimary text-justify pb-5 pt-2'>{children}</h1>,
    h2: ({ children }) => <h2 className='text-2xl sm:text-4xl font-semibold text-textPrimary text-justify pb-5 pt-2'>{children}</h2>,
    h3: ({ children }) => <h3 className='text-xl sm:text-3xl font-semibold text-textPrimary text-justify pb-5 pt-2'>{children}</h3>,
    h4: ({ children }) => <h4 className='text-lg sm:text-2xl font-semibold text-textPrimary text-justify pb-5 pt-2'>{children}</h4>,
    h5: ({ children }) => <h5 className='text-base sm:text-xl font-semibold text-textPrimary text-justify pb-5 pt-2'>{children}</h5>,
    h6: ({ children }) => <h6 className='text-sm sm:text-lg font-semibold text-textPrimary text-justify pb-5 pt-2'>{children}</h6>,
    normal: ({ children }) => <p className='text-base sm:text-lg text-textSecondary text-justify pb-3'>{children}</p>,
  },
  list: {
    style: 'normal',
    bullet: ({ children }) => <ul className='list-disc list-inside text-justify'>{children}</ul>,
    number: ({ children }) => <ol className='list-decimal list-inside text-justify'>{children}</ol>,
  },
  listItem: {
    style: 'normal',
    bullet: ({ children }) => <li className='text-base sm:text-lg text-textPrimary text-justify pb-3'>{children}</li>,
    number: ({ children }) => <li className='text-base sm:text-lg text-textPrimary text-justify pb-3'>{children}</li>,
  },
};

const RichText = ({ blockContent }) => {
  return (
    <div>
      <PortableText
        value={blockContent}
        components={myPortableTextComponents}
      />
    </div>
  );
};

// const Image = ({ value }) => {
//   const imageData = getGatsbyImageData(
//     value.asset._ref,
//     { placeholder: "blurred" },
//     { dataset: `${process.env.GATSBY_SANITY_DATASET}`, projectId: `${process.env.GATSBY_SANITY_PROJECT_ID}` }
//   );
//   return <GatsbyImage image={imageData} alt='' />;
// };

export default RichText;
