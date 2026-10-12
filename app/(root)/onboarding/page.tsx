'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const sections = [
    { id: 'overview', title: 'What you will set up' },
    { id: 'create-shopify-store', title: 'Create and Install Shopify Store' },
    { id: 'connect-store', title: 'Connect your store' },
    { id: 'brand', title: 'Set your brand and language' },
    { id: 'payments', title: 'Choose payment methods' },
    { id: 'shipping', title: 'Add shipping regions' },
    { id: 'test-order', title: 'Place a test order' },
    { id: 'go-live', title: 'Go live' },
    { id: 'help', title: 'If something goes wrong' },
]

const H2 = ({ id, children }: { id: string; children: React.ReactNode }) => (
    <h2
        id={id}
        className='mb-4 mt-16 scroll-mt-24 font-sans text-2xl font-semibold tracking-tight text-slate-900 first:mt-0 lg:scroll-mt-12'
    >
        {children}
    </h2>
)

const P = ({ children }: { children: React.ReactNode }) => (
    <p className='mb-5 text-[1.0625rem] leading-8 text-slate-700'>{children}</p>
)

const Code = ({ children }: { children: React.ReactNode }) => (
    <code className='rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.9em] text-slate-900'>{children}</code>
)

const Callout = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <aside className='my-8 border-l-4 border-teal-700 bg-teal-50 px-5 py-4 font-sans text-[0.95rem] leading-7 text-slate-800'>
        <p className='font-semibold text-teal-900'>{title}</p>
        <div className='mt-1'>{children}</div>
    </aside>
)

const page = () => {
    const [active, setActive] = useState(sections[0].id)

    // Track which heading is in view so the side nav can highlight it
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
                if (visible[0]) setActive(visible[0].target.id)
            },
            { rootMargin: '0px 0px -75% 0px' }
        )
        sections.forEach((s) => {
            const el = document.getElementById(s.id)
            if (el) observer.observe(el)
        })
        return () => observer.disconnect()
    }, [])

    const nav = (
        <ol className='space-y-1 border-l border-slate-200'>
            {sections.map((s) => {
                const isActive = active === s.id
                return (
                    <li key={s.id}>
                        <a
                            href={`#${s.id}`}
                            aria-current={isActive ? 'location' : undefined}
                            className={`-ml-px block border-l-2 py-1.5 pl-4 pr-2 font-sans text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700/40 ${isActive
                                ? 'border-teal-700 font-medium text-teal-900'
                                : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-900'
                                }`}
                        >
                            {s.title}
                        </a>
                    </li>
                )
            })}
        </ol>
    )

    return (
        <main className='shell min-h-screen bg-white motion-safe:scroll-smooth lg:grid lg:grid-cols-[18rem_1fr]'>
            {/* Side nav: sticky on desktop */}
            <aside className='hidden border-r border-slate-200 bg-slate-50 lg:block'>
                <nav aria-label='On this page' className='sticky top-0 max-h-screen overflow-y-auto px-8 py-12'>
                    <p className='mb-4 font-sans text-sm font-semibold text-slate-900'>On this page</p>
                    {nav}
                </nav>
            </aside>

            {/* Mobile: collapsible nav */}
            <details className='sticky top-0 z-10 border-b border-slate-200 bg-white/95 px-5 py-3 backdrop-blur lg:hidden'>
                <summary className='cursor-pointer font-sans text-sm font-medium text-slate-900'>On this page</summary>
                <nav aria-label='On this page' className='mt-3 pb-2'>
                    {nav}
                </nav>
            </details>

            <article className='px-5 py-12 sm:px-10 lg:px-20 lg:py-20'>
                <div className='mx-auto max-w-[68ch]'>
                    <header className='mb-14'>
                        <p className='font-sans text-sm text-slate-500'>Onboarding guide · 15 minute read</p>
                        <h1 className='mt-3 font-sans text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl'>
                            Gulfcart Integration with Shopify
                        </h1>
                        <p className='mt-5 text-xl leading-8 text-slate-600'>
                            This guide walks you through connecting your Shopify store, setting up payments.
                        </p>
                    </header>

                    <H2 id='overview'>What you will set up</H2>
                    <P>
                        By the end of this guide your store will use a custom checkout that speaks Arabic and English,
                        accepts the payment methods your customers already trust, and ships to the countries you choose.
                    </P>
                    <P>
                        The steps below are in order, and each one builds on the last. You can leave and come back at any
                        point; your progress is saved as you go.
                    </P>

                    <H2 id='create-shopify-store'>Create and Install Shopify Store</H2>
                    <p className='mb-2'>Requirements:</p>
                    <ul className='mb-5 list-disc space-y-1 pl-6 text-[1.0625rem] leading-8 text-slate-700 marker:text-slate-400'>
                        <li>Admin access to your Shopify store.</li>
                        <li>Access to Build shopify apps</li>
                    </ul>
                    <ul>
                        <li>
                            <h2>Go to Settings</h2>
                            <div className='w-full h-120 border border-gray-300 rounded-3xl relative'>
                                <Image className='h-full w-auto object-contain' fill alt={'Go to settings'} src={'/onboarding-assets/install-custom-app/go-to-settings.png'} />
                            </div>
                        </li>

                        <li>
                            <h2>Go to Apps</h2>
                            <div className='w-full h-120 border border-gray-300 rounded-3xl relative'>
                                <Image className='h-full w-auto object-contain' fill alt={'Go to apps'} src={'/onboarding-assets/install-custom-app/go-to-apps.png'} />
                            </div>
                        </li>
                        <li>
                            <h2>Go to Develop Apps</h2>
                            <div className='w-full h-120 border border-gray-300 rounded-3xl relative'>
                                <Image className='h-full w-auto object-contain' fill alt={'Go to develop apps'} src={'/onboarding-assets/install-custom-app/go-to-develop-apps.png'} />
                            </div>
                        </li>
                        <li>
                            <h2>Go to Build Apps in Dashboard</h2>
                            <div className='w-full h-120 border border-gray-300 rounded-3xl relative'>
                                <Image className='h-full w-auto object-contain' fill alt={'Go to build apps in dashboard'} src={'/onboarding-assets/install-custom-app/go-to-build-apps-in-dashboard.png'} />
                            </div>
                        </li>

                        <li>
                            <h2>Go to Build Apps in Dashboard</h2>
                            <div className='w-full h-120 border border-gray-300 rounded-3xl relative'>
                                <Image className='h-full w-auto object-contain' fill alt={'Go to build apps in dashboard'} src={'/onboarding-assets/install-custom-app/go-to-build-apps-in-dashboard.png'} />
                            </div>
                        </li>
                    </ul>



                    <ul>
                        <li>
                            <h2>Click on Create app</h2>
                            <div className='w-full h-120 border border-gray-300 rounded-3xl relative'>
                                <Image className='h-full w-auto object-contain' fill alt={'click on create app'} src={'/onboarding-assets/install-custom-app/click-create-app.png'} />
                            </div>
                        </li>

                        <li>
                            <h2>Fill App Detail Card</h2>
                            <div className='w-full h-120 border border-gray-300 rounded-3xl relative'>
                                <Image className='h-full w-auto object-contain' fill alt={'fill app details'} src={'/onboarding-assets/install-custom-app/fill-app-details.png'} />
                            </div>
                        </li>
                        <li>
                            <h2>Fill Api Access Detail Card</h2>
                            <div className='w-full h-120 border border-gray-300 rounded-3xl relative'>
                                <Image className='h-full w-auto object-contain' fill alt={'fill api access details'} src={'/onboarding-assets/install-custom-app/fill-api-access-details.png'} />
                            </div>
                        </li>

                        <li>
                            <h2>Fill Url Detail Card</h2>
                            <div className='w-full h-120 border border-gray-300 rounded-3xl relative'>
                                <Image className='h-full w-auto object-contain' fill alt={'fill url details'} src={'/onboarding-assets/install-custom-app/fill-urls-details.png'} />
                            </div>
                        </li>
                        <li>
                            <h2>Release app</h2>
                            <div className='w-full h-120 border border-gray-300 rounded-3xl relative'>
                                <Image className='h-full w-auto object-contain' fill alt={'release app'} src={'/onboarding-assets/install-custom-app/release-app.png'} />
                            </div>
                        </li>
                        <li>
                            <h2>Share App Credentials</h2>
                            <div className='w-full h-120 border border-gray-300 rounded-3xl relative'>
                                <Image className='h-full w-auto object-contain' fill alt={'share app credentials'} src={'/onboarding-assets/install-custom-app/share-app-credentials.png'} />
                            </div>
                        </li>
                        <li>
                            <h2>Install App in your store</h2>
                            <div className='w-full h-120 border border-gray-300 rounded-3xl relative'>
                                <Image className='h-full w-auto object-contain' fill alt={'install app'} src={'/onboarding-assets/install-custom-app/install-app.png'} />
                            </div>
                        </li>
                    </ul>

                    <H2 id='connect-store'>Connect your store</H2>
                    <P>
                        Open <strong>Settings → Store</strong> and enter your store address. It looks like{' '}
                        <Code>your-store.myshopify.com</Code>. Select <strong>Connect Shopify</strong> and approve the
                        permissions Shopify shows you.
                    </P>
                    <P>
                        We ask for access to products, orders, and customers. We use them to build the cart, create the
                        order, and send confirmations. Nothing else is read.
                    </P>
                    <Callout title='Use the .myshopify.com address'>
                        If you enter your public domain, the connection will fail. You can find the right address in
                        Shopify under Settings, then Domains.
                    </Callout>

                    <H2 id='brand'>Set your brand and language</H2>
                    <P>
                        Upload your logo and pick one brand color. Buttons, links, and focus states in the checkout use
                        that color, so choose one that has enough contrast against white.
                    </P>
                    <P>
                        Next, choose a default language. If you pick Arabic, the checkout switches to right-to-left
                        layout automatically. You can also offer both languages, and customers switch with one tap at the
                        top of the page.
                    </P>

                    <H2 id='payments'>Choose payment methods</H2>
                    <P>
                        Turn on only the methods you can support well. A short list that works is better than a long list
                        with gaps.
                    </P>
                    <div className='mb-6 overflow-x-auto'>
                        <table className='w-full min-w-[32rem] border-collapse text-left font-sans text-sm'>
                            <thead>
                                <tr className='border-b border-slate-300 text-slate-900'>
                                    <th className='py-2 pr-4 font-semibold'>Method</th>
                                    <th className='py-2 pr-4 font-semibold'>Best for</th>
                                    <th className='py-2 font-semibold'>You need</th>
                                </tr>
                            </thead>
                            <tbody className='text-slate-700'>
                                <tr className='border-b border-slate-200'>
                                    <td className='py-3 pr-4'>Cards</td>
                                    <td className='py-3 pr-4'>Most customers</td>
                                    <td className='py-3'>A payment provider account</td>
                                </tr>
                                <tr className='border-b border-slate-200'>
                                    <td className='py-3 pr-4'>Apple Pay</td>
                                    <td className='py-3 pr-4'>Fast mobile checkout</td>
                                    <td className='py-3'>A verified domain</td>
                                </tr>
                                <tr className='border-b border-slate-200'>
                                    <td className='py-3 pr-4'>Buy now, pay later</td>
                                    <td className='py-3 pr-4'>Larger baskets</td>
                                    <td className='py-3'>A provider merchant account</td>
                                </tr>
                                <tr className='border-b border-slate-200'>
                                    <td className='py-3 pr-4'>Cash on delivery</td>
                                    <td className='py-3 pr-4'>First-time buyers</td>
                                    <td className='py-3'>A courier that collects cash</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <P>
                        Paste your provider keys under <strong>Settings → Payments</strong>. Use test keys for now; you
                        will swap them for live keys when you go live.
                    </P>

                    <H2 id='shipping'>Add shipping regions</H2>
                    <P>
                        Select each country you ship to, then set a flat rate or a rate by order value. If you want to
                        reward larger orders, set a free-shipping threshold. Customers see how much more they need to add
                        before they qualify.
                    </P>
                    <P>
                        Countries you leave off the list cannot reach the payment step. They see a message that you do not
                        ship to their address yet.
                    </P>

                    <H2 id='test-order'>Place a test order</H2>
                    <P>
                        Add a product to your cart and open the checkout with test mode on. Use a test card from your
                        payment provider, for example:
                    </P>
                    <pre className='mb-6 overflow-x-auto rounded-md bg-slate-900 p-5 font-mono text-sm leading-7 text-slate-100'>
                        <code>{`Card number   4242 4242 4242 4242
Expiry        Any future date
CVC           Any three digits`}</code>
                    </pre>
                    <P>
                        Check four things: the address form accepts a local address, the totals match what you expect,
                        the confirmation page loads, and the confirmation email arrives in the right language.
                    </P>

                    <H2 id='go-live'>Go live</H2>
                    <P>
                        Replace your test keys with live keys, then switch on the checkout from{' '}
                        <strong>Settings → Launch</strong>. New carts use the custom checkout straight away. Carts that
                        were already open finish on the old one, so you will not lose any orders in progress.
                    </P>
                    <Callout title='Place one real order first'>
                        Buy something small yourself and refund it. It is the quickest way to confirm that live keys,
                        emails, and shipping all work together.
                    </Callout>

                    <H2 id='help'>If something goes wrong</H2>
                    <P>
                        If the checkout does not appear, confirm that the store is connected and that the launch switch is
                        on. If a payment method is missing, check that its keys are saved and that the customer's country
                        is in your shipping list.
                    </P>
                    <P>
                        Still stuck? Reply to your welcome email with your store address and a short description of what
                        you see. We read every message.
                    </P>
                </div>
            </article>
        </main>
    )
}

export default page