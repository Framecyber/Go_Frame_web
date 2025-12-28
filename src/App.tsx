import { Routes, Route } from "react-router-dom"
import { HomePage } from "@/pages/HomePage"
import { ContactPage } from "@/pages/ContactPage"
import { NewsPage } from "@/pages/NewsPage"
import { LocationPage } from "@/pages/LocationPage"
import { CoursesPage } from "@/pages/CoursesPage"
import { CourseDetailPage } from "@/pages/CourseDetailPage"
import { CommentGamePage } from "@/pages/CommentGamePage"
import { QualifyDanPage } from "@/pages/QualifyDanPage"
import { VerifyDanPage } from "@/pages/VerifyDanPage"
import { ShopPage } from "@/pages/ShopPage"
import { KnowledgePage } from "@/pages/KnowledgePage"
import { ActivitiesPage } from "@/pages/ActivitiesPage"
import { AboutHistoryPage } from "@/pages/AboutHistoryPage"
import { AboutTeachingPage } from "@/pages/AboutTeachingPage"
import { DanFormPage } from "@/pages/dan_form_page"
import { ArticleDetailPage } from "@/pages/ArticleDetailPage"
import { ActivitiesNewsPage } from "@/pages/ActivitiesNewsPage"
import { CompetitionsPage } from "@/pages/CompetitionsPage"

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<KnowledgePage />} />
        <Route path="/articles/:slug" element={<ArticleDetailPage />} />
        <Route path="/knowledge" element={<KnowledgePage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/about/history" element={<AboutHistoryPage />} />
        <Route path="/about/teaching" element={<AboutTeachingPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/activities-news" element={<ActivitiesNewsPage />} />
        <Route path="/competitions" element={<CompetitionsPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/courses/:slug" element={<CourseDetailPage />} />
        <Route path="/comment-game" element={<CommentGamePage />} />
        <Route path="/qualify-dan" element={<QualifyDanPage />} />
        <Route path="/verify-dan" element={<VerifyDanPage />} />
        <Route path="/dan-form" element={<DanFormPage />} />
      </Routes>
  )
}

export default App
