// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import company from './documents/company'
import page from './documents/page'
import siteHome from './documents/siteHome'
import employment from './documents/employment'
import siteSettings from './documents/siteSettings'

// object types
import barePortableText from './objects/barePortableText'
import basicPortableText from './objects/basicPortableText'
import bgImage from './objects/bgImage'
import bodyPortableText from './objects/bodyPortableText'
import button from './objects/button'
import companyCard from './objects/companyCard'
import companyCardEmployment from './objects/companyCardEmployment'
import iframeEmbed from './objects/iframeEmbed'
import mainImage from './objects/mainImage'
import youtube from './objects/youtube'

// Common Tabs
import seo from './tabs/seo'

// sections
import ctaSection from './objects/sections/cta'
import mainHeadingSection from './objects/sections/mainHeadingSection'
import rteSection from './objects/sections/rteSection'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */

    // objects,
    barePortableText,
    basicPortableText,
    bgImage,
    bodyPortableText,
    button,
    companyCard,
    companyCardEmployment,
    iframeEmbed,
    mainImage,
    youtube,
    // tabs 
    seo,
    // documents
    company,
    employment,
    page,
    siteHome,
    siteSettings,
    // sections
    ctaSection,
    rteSection,
    mainHeadingSection
  ]),
})
