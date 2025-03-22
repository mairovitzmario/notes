import { Card, CardContent } from "@/components/ui/card";
import { Plus, Pencil, Trash2, FolderOpen, FileText } from "lucide-react";

import { FeatureItem } from "@/app/(notes)/components/FeatureItem";
import NoteIcon from "@/app/(notes)/components/NoteIcon";
import AddNoteButton from "@/app/(notes)/components/AddNoteButton";

export default function Home() {


  return (

    <div className="flex flex-col items-center justify-center p-4 md:p-8 mt-2 md:mt-6">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Welcome to Notes</h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Your personal space for capturing thoughts, ideas, and important information.
          </p>
        </div>

        <Card className="border-muted/40 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-xl   font-semibold">With Notes, you can:</h2>
                <ul className="space-y-4">
                  <FeatureItem
                    icon={Plus}
                    title="Create new notes instantly"
                    description="Capture your ideas the moment they come to you"
                  />
                  <FeatureItem
                    icon={Pencil}
                    title="Edit your notes anytime"
                    description="Refine and update your content as needed"
                  />
                  <FeatureItem
                    icon={Trash2}
                    title="Delete notes you no longer need"
                    description="Keep your workspace clean and organized"
                  />
                  <FeatureItem
                    icon={FolderOpen}
                    title="Organize your thoughts efficiently"
                    description="Group related notes and find them easily"
                  />
                </ul>
              </div>

              <div className="flex flex-col items-center justify-center">
                <NoteIcon />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col items-center space-y-4">
          <p className="text-center text-muted-foreground">
            Select a note from the sidebar or create a new one to get started!
          </p>
          <AddNoteButton />
        </div>
      </div>
    </div>

  );
}
