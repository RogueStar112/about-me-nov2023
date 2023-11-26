import Link from "next/link"
import { merriweather } from "../layout"


export default function Project({title, deploy_href, description, skillset, when}) {
  return <section className={`${merriweather.className} justify-between mt-6`}>

  <Link className="text-2xl" href={deploy_href}>{title} - {when}</Link>

  <p>{skillset}</p>
  <p>{description}</p>
  </section>
}