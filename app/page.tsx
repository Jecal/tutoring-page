import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Home() {
  return (
    <>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Tutoring
          </h1>
        </header>

        <div className="grid gap-8 md:grid-cols-2 mb-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Mathematics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>AP Calculus AB</li>
                <li>AP Precalculus</li>
                <li>Calculus Honors</li>
                <li>Algebra 2</li>
                <li>AP Calculus BC</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle>Science</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>AP Computer Science A</li>
                <li>AP Computer Science P</li>
                <li>AP Biology</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Alert className="w-full mb-8">
          <AlertTitle className="font-bold text-lg">
            Regarding AP Biology and AP Calculus BC
          </AlertTitle>
          <AlertDescription>
            I can tutor these subjects depending on the topic. Please let me
            know before scheduling.
          </AlertDescription>
        </Alert>

        <div className="grid gap-8 md:grid-cols-2 mb-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Monday: 3:15-5:00</li>
                <li>Tuesday: Off</li>
                <li>Wednesday: 3:00-5:00</li>
                <li>Thursday: 3:00-5:00</li>
                <li>Friday: 3:00-5:00</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle>Contact Info</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Email: 101960@bergenfield.org</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
