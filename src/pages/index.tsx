import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Textarea } from "@heroui/input";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="mt-8">
          <p>Hello World</p>
        </div>
      </section>
    </DefaultLayout>
  );
}
