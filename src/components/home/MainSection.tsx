'use client'
import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText"

export default function MainSection() {
    return(
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-2 text-2xl font-semibold items-baseline">
          <span>Find</span>
          <div className="relative min-w-[12ch] h-[1lh] overflow-hidden">
            <RotatingText
              texts={[
                "pickup games",
                "local matches",
                "weekend games",
                "evening kickoffs",
                "skilled players",
                "casual games"
              ]}
              rotationInterval={2000}
              loop
              auto
              animatePresenceMode="wait"
              transition={{ type: "spring", damping: 20, stiffness: 250 }}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              elementLevelClassName="inline-block"
            />
          </div>
        </div>

      </main>
    )
}