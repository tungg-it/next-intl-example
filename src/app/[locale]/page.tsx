import { useTranslations } from "next-intl";
import ChangeLanguage from "./change-language";

export default function HomePage({ params }: any) {
  const t = useTranslations("Index");
  return (
    <div>
      <h1>{t("title")}</h1>
      <ChangeLanguage locale={params.locale} />
    </div>
  );
}
