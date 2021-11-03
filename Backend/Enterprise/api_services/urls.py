from django.urls import path
from .views import EmployeeViews

urlpatterns = [
    path('', EmployeeViews.as_view(), name="employee_names"),
]
