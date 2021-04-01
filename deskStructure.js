import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdHome } from "react-icons/md"
import { MdPerson } from "react-icons/md"
import { GiPizzaCutter } from "react-icons/gi"
import {FaRegStar, FaRegCalendarAlt, FaTruck} from "react-icons/fa"


const hiddenDocTypes = listItem =>
  !['siteSettings', 'menuItem', 'menuPizzaShop', 'dish', 'dishPizzaShop', 'page', 'event', 'special', 'dishSpecial', 'specials', 'siteHome', 'menuMeals', 'events'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home')
        .icon(MdHome)
        .child(
          S.editor()
            .id('siteHome')
            .schemaType('siteHome')
            .documentId('siteHome')
        ),
      S.listItem()
        .title('Employment')
        .icon(MdPerson)
        .child(
          S.editor()
            .id('siteEmployment')
            .schemaType('employment')
            .documentId('employment')
        ),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      S.listItem()
        .title('Companies')
        .schemaType('company')
        .child(S.documentTypeList('company').title('DelGrosso Companies')),
      S.divider(),
      S.listItem()
        .title('Pages')
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),
      // S.listItem()
      //   .title('Blog posts')
      //   .schemaType('post')
      //   .child(S.documentTypeList('post').title('Blog posts')),
      // S.listItem()
      //   .title('Authors')
      //   .icon(MdPerson)
      //   .schemaType('author')
      //   .child(S.documentTypeList('author').title('Authors')),
      // S.listItem()
      //   .title('Categories')
      //   .schemaType('category')
      //   .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      // ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
