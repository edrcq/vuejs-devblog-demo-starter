import slugify from "slugify"
import { randomMath } from "./utils"
import MdIt from 'markdown-it'

const md = new MdIt({
	html: true,
	breaks: true,
})


export default class Article {
	constructor({ id, title, short_content, md_content, image = "" }) {
		this.id = id ? id : `${slugify(title, { replacement: '-' })}-${randomMath()}`
		this.title = title
		this.short_content = short_content
		this.md_content = md_content
		this.image = image
	}

	get htmlContent() {
		return md.render(this.md_content)
	}
}
