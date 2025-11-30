async function onChangePlan() {
  const studentId = keycloak.tokenParsed.preferred_username;
  const select = document.getElementById("ecors-dropdown-plan");
  const planId = Number(select.value);

  // Frontend check for safety (Backend must also enforce this)
  if (declaredPlanData && declaredPlanData.status === 'CANCELLED') {
    showDialog("Cannot update the declared plan because it has been cancelled. Please declare a new plan.");
    return;
  }

  try {
    const res = await fetch(`${base}/api/v1/students/${studentId}/declared-plan`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${keycloak.token}`
      },
      body: JSON.stringify({ planId })
    });

    if (res.status === 200) {
      showDialog("Declaration updated.");
      loadDeclaredPlan(); // Reload UI to reflect new status
      return;
    }

    if (res.status === 404) {
      showDialog(`No declared plan found for student with id=${studentId}.`);
      loadDeclaredPlan(); 
      return;
    }
    if (res.status === 409) {
      showDialog("You may have declared study plan already. Please check again.");
      return;
    }
    
    console.error("API Error Status:", res.status);
    showDialog("There is a problem. Please try again later.");
    
  } catch (err) {
    console.error("Declare error:", err);
    showDialog("There is a problem. Please try again later.");
  }
}