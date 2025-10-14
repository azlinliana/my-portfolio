import ContentLayout from "@/components/layout/content-layout";
import TitleSection from "@/components/title-section";

const workCards = [
    {
        name: "Loan Payment Tracking System",
        description:
        "Personal portfolio designed to showcase projects in an organized and professional way.",
        type: ["B2B Web Application"],
    },
];

export default function Works() {
    return (
        <ContentLayout>
            <TitleSection text="Works" />

            <div className="flex flex-col space-y-12 w-full py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 w-full">
                    {workCards.map((work) => (
                        <a
                            key={work.name}
                            href="works/description"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full rounded-xl overflow-hidden relative hover:scale-[1.02] transition-transform duration-300"
                        >
                            <div
                                className="
                                flex flex-col justify-start
                                rounded-xl border border-gray-300
                                bg-slate-50 shadow-md
                                "
                            >
                                {/* Gradient Background instead of Image */}
                                <div
                                    className="
                                    relative w-full h-48
                                    bg-gradient-to-r from-[#ddd6fe] via-[#c7b8ff] to-[#a5b4fc]
                                    "
                                />

                                {/* Content */}
                                <div className="p-6">
                                    {/* work Title */}
                                    <h3 className="text-lg font-semibold mb-1">
                                        {work.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm mb-3 text-justify">
                                        {work.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {work.type.map((type) => (
                                        <span
                                            key={type}
                                            className="text-xs border border-gray-300 px-2 py-1 rounded-full"
                                        >
                                            {type}
                                        </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </ContentLayout>
    );
}