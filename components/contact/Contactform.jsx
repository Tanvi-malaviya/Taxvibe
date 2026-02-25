"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { PrimaryButton } from "@/components/ui/Button";





export default function ContactForm() {
    return (
        <section className="relative min-h-screen py-12 bg-[var(--background)] overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] leading-tight">
                        Let’s Start a
                        <span className="block text-[var(--color-accent)]">
                            Financial Conversation
                        </span>
                    </h2>

                    <p className="mt-6 text-[var(--color-text-muted)] text-lg max-w-xl">
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque recusandae ad accusantium, ducimus laboriosam id molestias esse.
                    </p>

                    {/* Contact Info Cards */}
                    <div className="mt-10 space-y-6">

                        {[
                            {
                                icon: Mail,
                                title: "Email Us",
                                text: "support@yourfirm.com",
                            },
                            {
                                icon: Phone,
                                title: "Call Us",
                                text: "+91 12345 67890",
                            },
                            {
                                icon: MapPin,
                                title: "Visit Office",
                                text: "Ahmedabad, Gujarat",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-5 bg-white/60 backdrop-blur-lg border border-[var(--color-border)] rounded-xl p-5 shadow-md transition duration-300"
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                                    <item.icon size={22} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[var(--color-text-main)]">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-[var(--color-text-muted)]">
                                        {item.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                    </div>
                </motion.div>

                {/* RIGHT SIDE CONTACT FORM */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="relative bg-white/70 backdrop-blur-2xl border border-[var(--color-border)] rounded-3xl p-12 shadow-2xl"
                >
                    <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-8">
                        Send Us a Message
                    </h3>

                    <form className="space-y-6">

                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-5 py-3 rounded-xl border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] bg-white"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-5 py-3 rounded-xl border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] bg-white"
                        />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full px-5 py-3 rounded-xl border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] bg-white"
                        />

                        <select
                            className="w-full px-5 py-3 rounded-xl border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] bg-white"
                        >
                            <option>Select Service</option>
                            <option>Tax Filing</option>
                            <option>GST Compliance</option>
                            <option>Business Advisory</option>
                        </select>

                        <textarea
                            rows={4}
                            placeholder="Your Message"
                            className="w-full px-5 py-3 rounded-xl border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] bg-white"
                        />

                        <PrimaryButton className="w-full">
                            Submit Inquiry
                        </PrimaryButton>

                        <p className="text-xs text-center text-[var(--color-text-muted)]">
                            We usually respond within 24 hours.
                        </p>

                    </form>
                </motion.div>

            </div>
        </section>
    );
}