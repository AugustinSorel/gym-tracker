import { useRouter } from "next/router";
import HeaderLayout from "src/layouts/HeaderLayout";
import MaxWidthLayout from "src/layouts/MaxWidthLayout";
import PriveRouteLayout from "src/layouts/PrivateRouteLayout";
import { NextPageWithLayout } from "../_app";

const ExercisePage: NextPageWithLayout = () => {
  const router = useRouter();

  return <h1>{router.query.id}</h1>;
};

ExercisePage.getLayout = (page) => {
  return (
    <PriveRouteLayout>
      <MaxWidthLayout>
        <HeaderLayout />
        {page}
      </MaxWidthLayout>
    </PriveRouteLayout>
  );
};

export default ExercisePage;
