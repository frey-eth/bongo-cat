import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";

export default function BongoDo() {
  return (
    <div className="flex gap-8 font-crotah">
      <Popover>
        <PopoverButton className="text-sm/6 font-semibold text-white/50 bg-black focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white py-2 px-4 outline-none rounded-md">
          Bongo Can Do
        </PopoverButton>
        <Transition
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <PopoverPanel
            anchor="bottom"
            className="divide-y divide-white/5 rounded-xl backdrop-blur-lg border text-sm/6 [--anchor-gap:var(--spacing-5)] outline-none"
          >
            <div className="p-3">
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Meow</p>
                <p className="text-white/50">Meow, meow meow meow meow, meow</p>
              </a>
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Meow meow meow</p>
                <p className="text-white/50">Meow meow, meow meow.</p>
              </a>
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Meow meowwwww</p>
                <p className="text-white/50">Meow meow meow meow. Meow.</p>
              </a>
            </div>
            <div className="p-3">
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">For more meow meow</p>
                <p className="text-white/50">
                  Meow meow, meow meow. Meow meow meow. Meow meow meow meow.
                  Meow.
                </p>
              </a>
            </div>
          </PopoverPanel>
        </Transition>
      </Popover>
    </div>
  );
}
