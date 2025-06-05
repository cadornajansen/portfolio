import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Contact, Facebook, Github, Mail } from "lucide-react";
import Link from "next/link";
import { TiktokIcon } from "@/components/tiktok-icon";

const socialLinks = [
  {
    label: "Jansen Cadorna",
    href: "https://facebook.com/jansencadorna",
    icon: Facebook,
  },
  {
    label: "@cadornajansen",
    href: "https://github.com/cadornajansen",
    icon: Github,
  },
  {
    label: "@xencodes",
    href: "https://www.tiktok.com/@xencodes",
    icon: TiktokIcon,
  },
];

export function ContactCard() {
  return (
    <Card id="contact" className="col-span-2 gap-1">
      <CardHeader>
        <CardTitle>
          <span className="flex gap-2 font-semibold items-center">
            <Contact className="w-5 h-5" />
            Contacts
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <span className="text-sm font-bold">Social Links</span>
        <ul className="flex flex-col gap-2">
          {socialLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background rounded-md p-2 flex items-center gap-2 hover:bg-muted transition"
                >
                  <Icon className="rounded-full h-5 w-5" />
                  <span className="text-xs font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <span className="text-sm font-bold">Email</span>
        <div className="bg-background rounded-md p-2 flex items-center gap-2">
          <Mail className="rounded-full h-4 w-4" />
          <Link
            href="mailto:jansencadorna5@gmail.com"
            className="text-xs font-medium"
          >
            jansencadorna5@gmail.com
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
