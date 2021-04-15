---
author: James Perkins
date: "2020-04-03"
title: "Why I removed analytics and and ended up with NextJs"
excerpt: "On a early Saturday morning of my first day of Staycation I decided to fix my blog performance and usability."
hero_image: "/nextjs-change.png"
tags: ["nextjs","speeds"]
---

On a early Saturday morning of my first day of Staycation I decided to fix my blog performance and usability.

I first decided its time to get rid of analytics, advertisements and other shit that no one really needs, and Google doesn't need any more data or cash. I removed Google Site Kit from my custom WordPress theme that I spent days creating and figuring out WordPress theme development and got a marginal improvement in speed and usability.

I then started updating my WordPress theme to use better web standards (Gzip, minified files) and also re-wrote the blog post engine to be mobile first. This created some great usability and fixed some strange problems I had encountered around code blocks overflowing only on mobile but the performance was just shit, first paint was somewhere around 2s. This included using Cloudflare to handle serving a cached site for any user, I removed Cloudflare and first paint was 3.5s on average.

At this point I decided to abandon ship, I'd been working on this for almost 5 hours and had improved usability, removed analytics and ads but hadn't increased performance more than 5%. I had a couple of options at this point, the popular Gatsby or Next.js. I considered a few things when weighing my options:

1. Ease of development
2. Usability on a Windows machine *** Yes I still use a Windows machine for development
3. Flexibility
4. Easy deployments

To be fair as a developer they both were equally matched except point number two. I spent about an hour on Gatsby trying to get it to run without using WSL (Windows Subsystem for Linux) because I would only use it for this project. In the same timeframe I had run through all the amazing tutorials on Next.js . So I left Gatsby behind without a second thought.

The blog itself needed to be fast, usable and simple. I have always been about taking the minimalist approach for the UI, I am not particular a fan of flashy animation , brash colors or over use media. I created the landing page to give a brief summary of myself and what I have been doing in the development world with a nice picture of myself.

I didn't want to use a contact form so my contact page has the option to send me an email or tweet me. This is how most of the people reach out to me these days, and they are guaranteed to get a response and know 100% that the email sent.

Finally the blog post feed I wanted to keep as simple as possible and for speed and performance only show the latest 10 posts. I have found that almost nobody reads posts older than the last 5 for my blog. I show a quick snippet of the article along with when it was published, with a clickable link to bring you to the full article.

The last thing I wanted to include was a link to my GitHub, Twitter, YouTube and Books in the navigation menu, to make it easy to find what they are looking for.

Next.js is a React framework for producing static websites so knocking out this kind of work was fairly simple to do. I then had to figure out how to create deployments with Zeit Now which I had never done before, usually I create a TravisCI or Jenkins to deploy any code to Production. Zeit Now is impressive, I linked my GitHub and linked my Repo and pushed some code and boom the deployment started and was deployed within 45 seconds! I then expected to have a slow site, even though it was static I thought a free tier is never truly free. WRONG! This is production speed right out the box, SSL cert ready.

I then ran the dreaded lighthouse audit thinking at a minimum I would be 70s across the board making a vast improvement of the scores. The scores below were from the last time I ran it on my Wordpress and my first run with my newly deployed code via Next.js and Zeit.

![SEO Image](/seo-before.jpg)

What a difference a day makes! The SEO score of 96 was because on mobile my tappable links were a little close together, added a small amount of padding and the perfect 100 was achieved. The desktop was just as perfect, what a great feeling!

If you have stuck it this far, I'd advise checking out https://nextjs.org/ and https://zeit.co/ build a small static site and see how easy it is to get started and fast you can spin up a great looking site.