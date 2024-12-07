import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

export default function ContactForm({ state, formAction, isPending }) {
  return (
    <form action={formAction} className="space-y-6 w-full max-w-md">
      <div>
        <Label htmlFor="name" className="text-sm font-medium text-gray-300">
          Name *
        </Label>
        <Input
          id="name"
          name="name"
          required
          defaultValue={state.data.name}
          className="mt-1 bg-gray-800 border-gray-700 text-white"
        />
        {state.errors?.name && (
          <>
            {state.errors.name.map((error, index) => (
              <p className="mt-1 text-sm text-red-400" key={index}>
                {error}
              </p>
            ))}
          </>
        )}
      </div>

      <div>
        <Label htmlFor="phone" className="text-sm font-medium text-gray-300">
          Phone
        </Label>
        <Input
          id="phone"
          name="phone"
          defaultValue={state.data.phone}
          className="mt-1 bg-gray-800 border-gray-700 text-white"
        />
        {state.errors?.phone && (
          <>
            {state.errors.phone.map((error, index) => (
              <p className="mt-1 text-sm text-red-400" key={index}>
                {error}
              </p>
            ))}
          </>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="text-sm font-medium text-gray-300">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          defaultValue={state.data.email}
          className="mt-1 bg-gray-800 border-gray-700 text-white"
        />
        {state.errors?.email && (
          <>
            {state.errors.email.map((error, index) => (
              <p className="mt-1 text-sm text-red-400" key={index}>
                {error}
              </p>
            ))}
          </>
        )}
      </div>

      <div>
        <Label className="text-sm font-medium text-gray-300">
          Profession *
        </Label>
        <RadioGroup
          name="profession"
          defaultValue={state.data.profession}
          className="mt-2 flex flex-col space-y-1"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="student" id="student" />
            <Label htmlFor="student" className="text-gray-300">
              Student
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="freelancer" id="freelancer" />
            <Label htmlFor="freelancer" className="text-gray-300">
              Freelancer
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="working-professional"
              id="working-professional"
            />
            <Label htmlFor="working-professional" className="text-gray-300">
              Working Professional
            </Label>
          </div>
        </RadioGroup>
        {state.errors?.profession && (
          <>
            {state.errors.profession.map((error, index) => (
              <p className="mt-1 text-sm text-red-400" key={index}>
                {error}
              </p>
            ))}
          </>
        )}
      </div>

      <div>
        <Label
          htmlFor="affiliated_institution"
          className="text-sm font-medium text-gray-300"
        >
          College/Company Name *
        </Label>
        <Input
          id="affiliated_institution"
          name="affiliated_institution"
          required
          defaultValue={state.data.affiliated_institution}
          className="mt-1 bg-gray-800 border-gray-700 text-white"
        />
        {state.errors?.affiliated_institution && (
          <>
            {state.errors.affiliated_institution.map((error, index) => (
              <p className="mt-1 text-sm text-red-400" key={index}>
                {error}
              </p>
            ))}
          </>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-medium text-gray-300">
          Message *
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          defaultValue={state.data.message}
          rows={5}
          className="mt-1 bg-gray-800 border-gray-700 text-white"
        />
        {state.errors?.message && (
          <>
            {state.errors.message.map((error, index) => (
              <p className="mt-1 text-sm text-red-400" key={index}>
                {error}
              </p>
            ))}
          </>
        )}
      </div>
      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-white text-black hover:bg-gray-200"
      >
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isPending ? "Sending your Message..." : "Send Message"}
      </Button>
    </form>
  );
}
