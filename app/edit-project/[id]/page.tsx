import { redirect } from "next/navigation";
import { getCurretUser } from "@/lib/session";
import Modal from "../../components/Modal";
import ProjectForm from "../../components/ProjectForm";
import { ProjectInterface } from "@/common.types";
import { getProjectDetails } from "@/lib/actions";

const EditProject = async ({ params: { id } }: { params: { id: string } }) => {
  const session = await getCurretUser();
  if (!session?.user) redirect("/");

  const result = (await getProjectDetails(id)) as {
    project?: ProjectInterface;
  };

  return (
    <Modal>
      <h3 className="modal-head-text">Edit Project</h3>
      <ProjectForm type="edit" session={session} project={result?.project} />
    </Modal>
  );
};

export default EditProject;
