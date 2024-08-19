import { LessonContent } from "../components/lesson_content";
import NoContent from "../components/no_content";
import PracticeMatching from "../components/practice_matching";
import PracticeTest from "../components/practice_test";
import Header from "../header/header";
import { useLesson } from "../store/setting_lesson";

export default function Layout() {
  const { selectedLesson, isTest, isMatching } = useLesson((state) => ({
    selectedLesson: state.selectedLesson,
    isTest: state.isTest,
    isMatching: state.isMatching
  }))
  return <>
    <Header />
    <div className="h-full w-full flex justify-center items-center">
      {isTest ? <PracticeTest /> : isMatching ? <PracticeMatching /> : (selectedLesson ? <LessonContent /> : <NoContent />)}
    </div>
  </>
}